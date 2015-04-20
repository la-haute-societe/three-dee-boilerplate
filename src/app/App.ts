export = App;

import MyScene = require("src/scene/MyScene");

module App
{
	export class Main
	{
		private _myScene				:MyScene;

		constructor ()
		{
			this.initScene();
		}

		private initScene ()
		{
			this._myScene = new MyScene();
		}
	}
}