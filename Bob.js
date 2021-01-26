class Bob {
    constructor(x,y,r){
        var options={
            restitution : 1,
            friction : 0.5,
            density : 1.0,
            isStatic : false
        }
        this.x = x
        this.y = y
        this.r = r
        
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        //stroke("blue")
        fill(243,4,243)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        
        //imageMode(CENTER)
        //image(this.image,0,0,50,50)
        pop()
            
    }
}