document.body.style.margin = 0;
document.body.style.padding = 0;

var audioClick = new Audio('click.mp3');
var blackboard = document.createElement('div');
var blackboardDAta = {
    width:500,
    height:500,
    backgroundColor:'black',
    position:'absolute',
    top:10,
    left:10,
    attrID:'myblackboard',

    blackboardUpdate:function(){
        blackboard.setAttribute('id',this.attrID);
        blackboard.style.width = this.width + 'px';
        blackboard.style.height = this.height + 'px';
        blackboard.style.backgroundColor = this.backgroundColor;
        blackboard.style.position = this.position;
        blackboard.style.top = this.top + '%';
        blackboard.style.left = this.left + '%';
    }
};



document.body.appendChild(blackboard);
blackboardDAta.blackboardUpdate();



function getRandomColor(){
    var randomColor = 'rgb('+
    Math.floor(Math.random()*256)+','+
    Math.floor(Math.random()*256)+','+
    Math.floor(Math.random()*256)+')';
    return randomColor;
}


function write(e){
    var inkBallData = {
        width:50,
        height:50,
        backgroundColor:getRandomColor(),
        position:'absolute',
        top:e.clientY-blackboard.offsetTop,
        left:e.clientX-blackboard.offsetLeft,
        borderRadius:50,
        attrClass:'inkBall',
    
        inkBallUpdate:function(){
            inkBall.style.width = this.width + 'px';
            inkBall.style.height = this.height + 'px';
            inkBall.style.backgroundColor = this.backgroundColor;
            inkBall.style.position = this.position;
            inkBall.style.top = this.top;
            inkBall.style.left = this.left;
            inkBall.style.borderRadius = this.borderRadius + '%';
            inkBall.setAttribute('class', this.attrClass);
        }
    };

    if(e.clientX>=blackboard.offsetLeft && e.clientX<=blackboard.offsetLeft+blackboardDAta.width 
        && e.clientY>=blackboard.offsetTop && e.clientY<=blackboard.offsetTop+blackboardDAta.height){
            var inkBall = document.createElement('div');
            inkBallData.inkBallUpdate();
            blackboard.append(inkBall);
            audioClick.play();
        }
}




document.addEventListener('mousedown' , (e)=>write(e));