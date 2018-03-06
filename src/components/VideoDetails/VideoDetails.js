import React from 'react';

const videoDetails = (props) => {
    let likes = props.details.likeCount;
    let dislikes = props.details.dislikeCount;
    
    if(likes > 999 && likes < 1000000){
       likes = Math.floor(likes/1000) + "K";
    }
    else if(likes > 999999){
       likes = Math.floor(likes/1000000) + "M";   
    }
    
    likes = likes + "";
    
    
    if(dislikes > 999 && dislikes < 1000000){
       dislikes = Math.floor(dislikes/1000) + "K";
    }
    else if(likes > 999999){
       dislikes = Math.floor(dislikes/1000000) + "M";   
    }
    
    dislikes = dislikes + "";

    return(
    <div className="video-details">
        <div style={{width: "100%", display:"inline-block", borderBottom: "1px solid #aaa"}}>
            <p style={{fontSize: "20px"}}>{props.details.title}</p>
            <div style={{float: "right", width: "250px", height: "40px"}}>
                <img width="30px" height="30px" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJcSURBVGhD7Zi9a1NRGMYj+EVFnBQEERwEB0XUxcFJdBAVB41DDcTEfDkE1y6SrZPiIBTq4lDaf6BbN0epICi4OXcSkdIWNKi/8/peiYcTUvsezQmcHzyce3POed/nSXIvNyllMplMJjPJdDqd061Wa7bZbB7VlyaPRqNxnwAbBPmBPhHqnE5NBpieQi81wG8R6rUuSR8Mn8Lwez+E6nu5XN6rS9OFr9I9QqwHAhR6o0vTpFqt7ifAfMD4H2q321d1S3pg7iQm3/qmfRF0UbekBwbLGPzimw7I3bGO6LZ06Ha7+zD33DM7VFw7d3VrOmDqBJ/CashwSKxd0K3pwPVwC3OffbPDRIhN9txhvDIo5i7VarXDWvb/goE6BvqDRo3qU3OhXq8f1BY23FcFXfBFo+O6xH0SZ2n6zTMSRdRdocWuX50MUGhxSIM5XeLuTsv+fEzxxl3WVjtnVBCOD3H81Z+PKeo/FjMWRgVhPB+aj6xZMWNhG0GuheYja0bMWNhGkOuh+ZiixyMxYyGFINwVH4gZCykEcT3EjIUUgrjf9WLGQgJBtnq93m4xY2HcQai/KkasjDsIeiFGrIw7CPUfihEro4JwfNOfiymesy6KESujgjBOh+YjqV+pVA6IEStFEMaPjDOMa3peBLmtTf+FPoiJGBRBkDzvcP7MnQ8EOaPz0UXtJdcjCkUQxjXkQshPWY4liIPjV0XzmOL6iPenRBHE12AQGh7j/F1o3U7l+lLa/suwwD2wUXQ+oGldItB8j3sHef2pt+5v9YQ6NygZL0Qmk8lkMpmJolT6CQoqQyX6k0HFAAAAAElFTkSuQmCC' style={{marginLeft: "25px", display: "inline-block"}}/>
                <p style={{lineHeight: "30px", marginLeft: "10px",fontSize:"18px", fontWeight: "heavier", color:"grey", verticalAlign: "top", display: "inline-block", marginTop: "0px"}}>{likes}</p>
                <img width="30px" height="30px" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIKSURBVGhD7Zm9SwNBFMRTWIgiiI2Cgo2ViLWVKFgqWIjVSSC5fJjaVs6/wEItRGwtBbESLCws7CxS2YqlSArBgCA6KxOJx13yNpzxLewPBnV9uzNjLrkEcx6Px+M25XL5BLpO0BpHflGpVGbxu+PYbK+6gg7NmTy+d0qlUh2HfcaF9W2O/ID1dajZPpeRmmEYrtKmN6RFisXiGNZf4nNZCX7P+Xx+lHb2SIvgL7aZNJel4LlDO3ukRczPSXNZCh6PURQN0NIOTUWM4LNFSzsUFrmnpR3aihjh5XiJtnI0FoHXBW3lKC3ygZf7GVrL0FjECH4HtJahuMir1Q1SaxEjeMpvkMqLyG+QmosYwVd2g3SgiOwGqb0ItcgY6bhQBN5HjJGOI0VuGSMdR4rUGSMdX6S/umOMdFwoAu89xkhHexH4PuDrEGOkIy2CtSA+89dChku8nR9nhM6EYbiADStxYX2KI9/gU9sk1t+TDLsJ+3bbzxZouVAoTNM6exAqioeUCMFOeYQeEGw/HlSgBj5bDPIIPSCYdRlcmhvcrguEsyqDy+ucW/WBgOIyKPIWBMEwt+oDIcVl1F5eLRBSVAaPyhm36AVBJWWeOK4bBO1aplarTXBcNwjbsQzu2CMc1Q8CJ5bBc+SGI+6A4PEyjUz+6fkftMqYR6Jarc5x2U3wNnye33o8nr6Ry30BTz3tmr5vZnsAAAAASUVORK5CYII=' style={{marginLeft: "25px", display: "inline-block"}}/>
                <p style={{lineHeight: "30px", marginLeft: "10px",fontSize:"18px", fontWeight: "heavier",color:"grey", verticalAlign: "top", display: "inline-block", marginTop: "0px"}}>{dislikes}</p>
            </div>
        </div>
        <div style={{height:"150px", overflowY:"auto", borderBottom: "1px solid #aaa"}}>
            <p style={{ fontSize: "13px", wordBreak: "break-word", textOverflow: "ellipsis", overflow: "scroll"}}>{props.details.description}</p>    
        </div>
        <style jsx>{`
            .video-details {
                width: 641px;
                display: inline-block;
                margin-right: 20px;
    
            }
        `}
        </style>
    </div>
    );
    
    
}



export default videoDetails;