/**
 * Interface for the engine config
 */
export interface IEngineConfig
{
	antialias				?:boolean;
	backgroundColor			?:number;
	backgroundAlpha			?:number;
	autoPixelRatio			?:boolean;

	cameraFov				?:number;
	cameraNear				?:number;
	cameraFar				?:number;
}

/**
 * The default engine config
 */
export var DEFAULT_ENGINE_CONFIG:IEngineConfig = {
	antialias		: true,
	backgroundColor	: 0xFFFFFF,
	backgroundAlpha	: 1,
	autoPixelRatio	: true,

	cameraFov		: 70,
	cameraNear		: 10,
	cameraFar		: 10000
};


/**
 * Detect WebGL capability
 */
export function isWebglAvailable ()
{
	try
	{
		var canvas = document.createElement("canvas");
		return !!(
		window["WebGLRenderingContext"] &&
		(canvas.getContext("webgl") ||
		canvas.getContext("experimental-webgl"))
		);
	}
	catch (e)
	{
		return false;
	}
}

/**
 * 3D Scene base to extend
 */
export class SceneBase
{
	/**
	 * The Three.js renderer
	 */
	private _renderer				:THREE.Renderer;
	get renderer ():THREE.Renderer { return this._renderer; }

	/**
	 * The default scene's camera
	 */
	private _camera					:THREE.PerspectiveCamera;
	get camera ():THREE.PerspectiveCamera { return this._camera; }

	/**
	 * The Three.js scene object (the root node)
	 */
	private _scene					:THREE.Scene;
	get scene ():THREE.Scene { return this._scene; }

	/**
	 * The size of the rendered scene in 2D [widthn, heigh†]
	 */
	private _renderSize				:number[];
	get renderSize ():number[] { return this._renderSize; }



	/**
	 * Init Three.js engine
	 */
	initEngine (pConfig:IEngineConfig = DEFAULT_ENGINE_CONFIG):boolean
	{
		// Check if our system support WebGL rendering
		if (isWebglAvailable())
		{
			// Instantiate the WebGL renderer
			this._renderer = new THREE.WebGLRenderer({
				antialias: pConfig.antialias
			});

			// Set the background color
			(<THREE.WebGLRenderer> this._renderer).setClearColor(pConfig.backgroundColor, pConfig.backgroundAlpha);
		}

		// No webGL availableà
		else return false;

		// Define pixel ratio
		if (pConfig.autoPixelRatio)
		{
			this._renderer['setPixelRatio'](window.devicePixelRatio);
		}

		// Add the three dom element (canvas) to the stage dom element
		document.getElementById("stage").appendChild(this._renderer.domElement);

		// Init default perspective camera
		this._camera = new THREE.PerspectiveCamera(pConfig.cameraFov, 1, pConfig.cameraNear, pConfig.cameraFar);

		// Init scene
		this._scene = new THREE.Scene();

		// Listen for brower resize
		window.onresize = this.windowResizedHandler;

		// Update size once
		this.windowResizedHandler();

		// Init scene
		this.initScene();

		// Enable render loop
		TweenLite.ticker.addEventListener("tick", () =>
		{
			this.enterFrameHandler();
		});

		// Render the first frame
		this.enterFrameHandler();

		// All is ok
		return true;
	}

	/**
	 * Called to init scene after engine. Have to be overrided via strategy pattern.
	 */
	initScene ():void { }

	/**
	 * Called every frames to run animations
	 */
	enterFrameHandler ():void
	{
		// Render a frame
		this.renderer.render(this.scene, this.camera);
	}

	/**
	 * Called when browser is resized
	 */
	windowResizedHandler = (pEvent:UIEvent = null):any =>
	{
		// Compute render size from stage dom element
		this._renderSize = [window.innerWidth, window.innerHeight];

		// Update camera aspect ratio
		this._camera.aspect = this._renderSize[0] / this._renderSize[1];

		// Update camera projection
		this._camera.updateProjectionMatrix();

		// Update renderer
		this._renderer.setSize(this._renderSize[0], this._renderSize[1]);
	};
}