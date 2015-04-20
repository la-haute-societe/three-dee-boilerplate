export = MyScene;

import ThreeEngine = require("../three/ThreeEngine");

class MyScene extends ThreeEngine.SceneBase
{
	private _light			:THREE.Light;

	private _cubeMesh		:THREE.Mesh;


	constructor ()
	{
		super();

		if (!this.initEngine())
		{
			alert("Your system does not support WebGL :(");
		}
	}


	initScene ():void
	{
		this._light = new THREE.DirectionalLight(0xFFFFFF, .8);

		this.scene.add(this._light);

		this._light.position.set(1000, 500, 1000);

		var cubeGeometry = new THREE.BoxGeometry(200, 200, 200, 1, 1, 1);

		var cubeMaterial = new THREE.MeshPhongMaterial({
			color		: 0xDEDEDE,
			ambient		: 0x555555,
			shininess	: 100
		});

		this._cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

		this.scene.add(this._cubeMesh);

		this.camera.position.z = 600;
	}

	enterFrameHandler ():void
	{
		this._cubeMesh.rotation.x += 0.02;
		this._cubeMesh.rotation.y += 0.01;

		// Relayer le rendu
		super.enterFrameHandler();
	}
}