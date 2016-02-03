#pragma strict

public var jump: int;
var canJump = true;
var score = 0;
public var scoreText: UI.Text;

function Update () {
	if (Input.GetKeyDown(KeyCode.Space) && canJump) {
		GetComponent.<Rigidbody2D>().AddForce(Vector2.up*jump);
		CoolDown();
	}
	if (transform.position.y > 6) {
		Application.LoadLevel("Main");
	}
}

function OnTriggerEnter2D(other: Collider2D) {
	if (other.gameObject.tag == "ground") {
		Application.LoadLevel("Main");
	} else if (other.gameObject.tag == "pipe") {
		Application.LoadLevel("Main");
	} else if (other.gameObject.tag == "point") {
		score += 1;
		scoreText.text = "Score: " + score;
	}
}

function CoolDown() {
	canJump = false;
	yield WaitForSeconds(.1);
	canJump = true;
}