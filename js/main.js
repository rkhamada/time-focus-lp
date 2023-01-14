//DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById ('greeting'),
    userName = document.getElementById ('userName'),
    userFocus = document.getElementById ('userFocus');

//show time
function showTime ( )
{
    let today = new Date ( ),
        hour = today.getHours ( ),
        min = today.getMinutes ( ),
        sec = today.getSeconds ( )
        
    //set AM or PM 
    const amPm = hour <= 12 ? 'AM' : 'PM';

    //12hr Format
    hour = hour % 12 || 12;

    //output time
    time.innerHTML = `${ addZero(hour) } : ${ addZero(min) } : ${ addZero(sec) } ${ amPm }` ;

    setTimeout ( showTime, 1000 );
}

//add zero
function addZero ( number ) 
{
    return ( parseInt ( number, 10 ) < 10 ? '0' : '' ) + number;
}

//set background and greeting
function setBgGreet( )
{
    let today = new Date ( ),
        hour = today.getHours ( );

    if ( hour < 12 )
    {
        document.body.style.backgroundImage = "url('public/img/day.jpg')";
        document.body.style.backgroundSize = "cover" 
        greeting.textContent = 'Good Morning';
    } else if ( hour < 18 )
    {
        document.body.style.backgroundImage = "url('public/img/day.jpg')";
        document.body.style.backgroundSize = "cover" 
        greeting.textContent = 'Good Afternoon';
    } else {
        document.body.style.backgroundImage = "url('public/img/evening.jpg')";
        document.body.style.backgroundSize = "cover" 
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white'
    }
}

//getName
function getName ( )
{
    if ( localStorage.getItem('userName') === null )
    {
        userName.textContent = '[Enter Your Name]';
    } else {
        userName.textContent = localStorage.getItem('userName')
    }
}

//getFocus
function getFocus ( )
{
    if ( localStorage.getItem('userFocus') === null )
    {
        userFocus.textContent = '[Enter Your Focus]';
    } else {
        userFocus.textContent = localStorage.getItem('userFocus')
    }
}

//resetAll 
function resetAll ( )
{
    localStorage.removeItem('userName');
    localStorage.removeItem('userFocus');
    window.location.reload( )
}

//setName
function setName ( e )
{
    if ( e.type === 'keypress' )
    {
        //make sure enter is pressed
        if ( e.which == 13 || e.keyCode == 13 ) {
            localStorage.setItem ( 'userName', e.target.innerText );
            userName.blur ( );
        }
    } else {
        localStorage.setItem ( 'userName', e.target.innerText )
    }
}

//setFocus
function setFocus ( e )
{
    if ( e.type == 'keypress' )
    {
        //makesure enter is pressed
        if ( e.which == 13 || e.keyCode == 13 )
        {
            localStorage.setItem ( 'userFocus', e.target.textContent );
            userFocus.blur ( );
        } else {
            localStorage.setItem ( 'userFocus', e.target.textContent );
        }
    }
}

userName.addEventListener( 'keypress', setName )
userName.addEventListener( 'blur', setName )
userFocus.addEventListener( 'keypress', setFocus )
userFocus.addEventListener( 'blur', setFocus )

//run
showTime ( );
setBgGreet ( );
getName ( );
getFocus ( );