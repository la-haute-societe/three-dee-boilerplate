export = MyScene;

/**
 * Load the ThreeEngine helper to create our first scene
 */
import ThreeEngine = require("../three/ThreeEngine");

/**
 * Our scene extends the default scene from the helper
 */
class MyScene extends ThreeEngine.SceneBase
{
	/**
	 * The light
	 */
	private _light			:THREE.Light;

	/**
	 * The cube
	 */
	private _cubeMesh		:THREE.Mesh;


	/**
	 * Class constructor
	 */
	constructor ()
	{
		// Relay construction
		super();

		// Try to init the 3D engine
		if (!this.initEngine())
		{
			alert("Your system does not support WebGL :(");
		}
	}


	/**
	 * Called to init the 3D scene when the engine is ready
	 */
	initScene ():void
	{
		// There will be light
		this._light = new THREE.DirectionalLight(0xFFFFFF, .8);

		// Add the light to our scene
		this.scene.add(this._light);

		// Place the light above our subject
		this._light.position.set(1000, 500, 1000);

		// Create a geometry for our cube
		var cubeGeometry = new THREE.BoxGeometry(200, 200, 200, 1, 1, 1);

		// Create the material for our cube
		var cubeMaterial = new THREE.MeshPhongMaterial({
			color		: 0xDEDEDE,
			ambient		: 0x555555,
			shininess	: 100
		});

		// Create the mesh from the geometry and the material
		// Meshs are 3D objects
		this._cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

		// Add the 3D cube to our scene
		this.scene.add(this._cubeMesh);

		// Set the camera position away from our cube to see it
		this.camera.position.z = 600;
	}

	/**
	 * Called each frame (~60 times a second)
	 */
	enterFrameHandler ():void
	{
		// Rotate our cube
		this._cubeMesh.rotation.x += 0.02;
		this._cubeMesh.rotation.y += 0.01;

		// Relayer le rendu
		super.enterFrameHandler();
	}
}