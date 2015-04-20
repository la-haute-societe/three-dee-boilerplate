export = App;

/**
 * Import our specific scene
 */
import MyScene = require("src/scene/MyScene");

module App
{
	/**
	 * Main class
	 */
	export class Main
	{
		/**
		 * Our scene
		 */
		private _myScene				:MyScene;

		/**
		 * App constructor
		 */
		constructor ()
		{
			this.initScene();
		}

		/**
		 * Init our specific scene
		 */
		private initScene ()
		{
			this._myScene = new MyScene();
		}
	}
}