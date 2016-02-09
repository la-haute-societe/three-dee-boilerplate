/**
 * Import our specific scene
 */
import {MyScene} from 'src/scene/MyScene';

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