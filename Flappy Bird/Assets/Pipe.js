#pragma strict

public var speed: int;
public var pipe: GameObject;

function Start () {
	yield WaitForSeconds(2);
	Instantiate(pipe, new Vector3(10,Random.Range(-2.25, 2.25), 0), Quaternion.identity);
}

function Update () {
	transform.Translate(Vector2.left*speed*Time.deltaTime);
	if (transform.position.x < -10) {
		Destroy(this.gameObject);
	}
}