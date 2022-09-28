var Ennemy = function (name, color, position, direction) {

    this.name = name;
    this.position = position;
    this.life = 3;
    this.direction = direction;
    this.speed = 0;

    this.material = new THREE.MeshLambertMaterial({
        color: color,
    });


    vehiculeMesh = new THREE.ConeGeometry(5, 20, 32);
    this.graphic = new THREE.Mesh(vehiculeMesh, this.material);
    this.graphic.position.z = 6;

};

Ennemy.prototype.move = function () {
    var moveTo = new THREE.Vector3(
        Math.cos(this.direction) + this.position.x,
        Math.sin(this.direction) + this.position.y,
        this.graphic.position.z
    );

    this.position = moveTo;

    if (this.speed > 0) {
        this.speed = this.speed - 0.04;
    }
    else if (this.speed < 0) {
        this.speed = this.speed + 0.04;
    }

    this.graphic.position.x = this.position.x;
    this.graphic.position.y = this.position.y;
};

Ennemy.prototype.accelerate = function (distance) {
    var max = 2;

    this.speed += distance / 4;
    if (this.speed >= max) {
        this.speed = max;
    }

};