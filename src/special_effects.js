const t = require('three')
const GameView = require('./game_view')


class Effects {
    constructor(){
        this.particleCount = 80
        this.goldParticleCount = 50
        this.particleGeometry = new t.Geometry();
        this.goldParticleGeometry = new t.Geometry();
        this.goldMaterial = new t.ParticleBasicMaterial({color: 0xFCF302, size: 0.05})
        this.partMaterial = new t.ParticleBasicMaterial({color: 0xff3200, size: 0.05});
        this.particles = new t.Points( this.particleGeometry, this.partMaterial );
        this.goldParticles = new t.Points( this.particleGeometry, this.goldMaterial );
        this.goldPower = 1.5;
        this.hitPower = 1.1;
    }
    doHitLogic(gameView){
        if(!this.particles.visible)return;
        for (let i = 0; i < this.particleCount; i ++ ) {
            let vertex = new t.Vector3();
            this.particleGeometry.vertices.push( vertex );
        }
        for (var i = 0; i < this.particleCount; i ++ ) {
            this.particleGeometry.vertices[i].multiplyScalar(this.hitPower);
        }

        if(this.hitPower>1.005){
            this.hitPower-=0.007;
            console.log("hit power is ", this.hitPower)
        }else{
            this.particles.visible=false;
        }
        this.particleGeometry.verticesNeedUpdate = true;
        gameView.scene.add( this.particles );
       
    }

    addHit(gameView){
        this.particles.position.y=gameView.heroSprite.position.y;
        this.particles.position.z=16;
        this.particles.position.x = gameView.heroSprite.position.x;
        for (var i = 0; i < this.particleCount; i ++ ) {
            var vertex = new t.Vector3();
            vertex.x = -0.2+Math.random() * 0.4;
            vertex.y = -0.2+Math.random() * 0.4 ;
            vertex.z = -0.2+Math.random() * 0.4;
            this.particleGeometry.vertices[i]=vertex;
        }
        this.hitPower=1.1;
        this.particles.visible=true;
    }
    
    doGoldLogic(gameView){
        if(!this.goldParticles.visible)return;
        for (let i = 0; i < this.goldParticleCount; i ++ ) {
            let gVertex = new t.Vector3();
            this.goldParticleGeometry.vertices.push( gVertex );
        }
        for (var i = 0; i < this.goldParticleCount; i ++ ) {
            this.goldParticleGeometry.vertices[i].multiplyScalar(this.goldPower);
        }

        if(this.goldPower>1.005){
            this.goldPower-=0.01;
            console.log(this.goldPower)
        }else{
            this.goldParticles.visible=false;
        }
        this.goldParticleGeometry.verticesNeedUpdate = true;
        gameView.scene.add( this.goldParticles );
        // this.goldParticles.visible=false;        
    }

    addGold(gameView){
        this.goldParticles.position.y=gameView.heroSprite.position.y;
        this.goldParticles.position.z=16;
        this.goldParticles.position.x = gameView.heroSprite.position.x;
        for (var i = 0; i < this.goldParticleCount; i ++ ) {
            var gVertex = new t.Vector3();
            gVertex.x = -0.2+Math.random() * 0.4;
            gVertex.y = -0.2+Math.random() * 0.4 ;
            gVertex.z = -0.2+Math.random() * 0.4;
            this.goldParticleGeometry.vertices[i]=gVertex;
        }
        this.goldPower=1.1;
        this.goldParticles.visible=true;
    }




}



module.exports = Effects;
