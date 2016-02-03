#pragma strict

public var speed: int;
public var bg: GameObject;

function Start () {

}

function Update () {
	transform.Translate(Vector2.left*speed*Time.deltaTime);
	if (transform.position.x < -12) {
		Instantiate(bg, new Vector3(12,0, .1), Quaternion.identity);
		Destroy(this.gameObject);
	}
}