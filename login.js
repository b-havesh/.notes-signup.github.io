// Show Password SVG

let show = document.querySelector('.show');
let pass = document.getElementById('pass');


let hidePath = '<path d="M12,9c-1.642,0-3,1.359-3,3c0,1.642,1.358,3,3,3c1.641,0,3-1.358,3-3C15,10.359,13.641,9,12,9z"></path><path d="M12,5c-7.633,0-9.927,6.617-9.948,6.684L1.946,12l0.105,0.316C2.073,12.383,4.367,19,12,19s9.927-6.617,9.948-6.684 L22.054,12l-0.105-0.316C21.927,11.617,19.633,5,12,5z M12,17c-5.351,0-7.424-3.846-7.926-5C4.578,10.842,6.652,7,12,7 c5.351,0,7.424,3.846,7.926,5C19.422,13.158,17.348,17,12,17z"></path>'

let showPath = '<path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757C12.568 16.983 12.291 17 12 17c-5.351 0-7.424-3.846-7.926-5 .204-.47.674-1.381 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379-.069.205-.069.428 0 .633C2.073 12.383 4.367 19 12 19zM12 5c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657.069-.205.069-.428 0-.633C21.927 11.617 19.633 5 12 5zM16.972 15.558l-2.28-2.28C14.882 12.888 15 12.459 15 12c0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501C9.796 7.193 10.814 7 12 7c5.351 0 7.424 3.846 7.926 5C19.624 12.692 18.76 14.342 16.972 15.558z"></path>'

show.addEventListener('click', () => {
    if (show.innerHTML == showPath) {
        show.innerHTML = hidePath;
        pass.setAttribute("type", "text");
    } else {
        show.innerHTML = showPath;
        pass.setAttribute("type", "password");
    }
});

// Tweet Change

let dot1 = document.querySelector('.first-review');
let dot2 = document.querySelector('.second-review');
let dot3 = document.querySelector('.third-review');


let tw1 = document.querySelector('.feedback-container1')
let tw2 = document.querySelector('.feedback-container2')
let tw3 = document.querySelector('.feedback-container3')


setInterval(() => {
    dot1.style.background = '#a7a7a7';
    dot2.style.background = '#fff';
    dot3.style.background = '#a7a7a7';

    tw1.classList.add('left-to-box');
    tw2.classList.add('box-to-left');
    tw3.classList.add('left-to-box');

    tw1.classList.remove('box-to-left');
    tw2.classList.remove('left-to-box');
    tw3.classList.remove('box-to-left');
}, 4000);

setInterval(() => {
    dot1.style.background = '#a7a7a7';
    dot2.style.background = '#a7a7a7';
    dot3.style.background = '#fff';

    tw1.classList.add('left-to-box');
    tw2.classList.add('left-to-box');
    tw3.classList.add('box-to-left');

    tw1.classList.remove('box-to-left');
    tw2.classList.remove('box-to-left');
    tw3.classList.remove('left-to-box');
}, 8000);

setInterval(() => {
    dot1.style.background = '#fff';
    dot2.style.background = '#a7a7a7';
    dot3.style.background = '#a7a7a7';

    tw1.classList.add('box-to-left');
    tw2.classList.add('left-to-box');
    tw3.classList.add('left-to-box');

    tw1.classList.remove('left-to-box');
    tw2.classList.remove('box-to-left');
    tw3.classList.remove('box-to-left');
}, 12000);


dot1.addEventListener('click', () => {
    dot1.style.background = '#fff';
    dot2.style.background = '#a7a7a7';
    dot3.style.background = '#a7a7a7';

    tw1.classList.add('box-to-left');
    tw2.classList.add('left-to-box');
    tw3.classList.add('left-to-box');

    tw1.classList.remove('left-to-box');
    tw2.classList.remove('box-to-left');
    tw3.classList.remove('box-to-left');
});

dot2.addEventListener('click', () => {
    dot1.style.background = '#a7a7a7';
    dot2.style.background = '#fff';
    dot3.style.background = '#a7a7a7';

    tw1.classList.add('left-to-box');
    tw2.classList.add('box-to-left');
    tw3.classList.add('left-to-box');

    tw1.classList.remove('box-to-left');
    tw2.classList.remove('left-to-box');
    tw3.classList.remove('box-to-left');
});

dot3.addEventListener('click', () => {
    dot1.style.background = '#a7a7a7';
    dot2.style.background = '#a7a7a7';
    dot3.style.background = '#fff';

    tw1.classList.add('left-to-box');
    tw2.classList.add('left-to-box');
    tw3.classList.add('box-to-left');

    tw1.classList.remove('box-to-left');
    tw2.classList.remove('box-to-left');
    tw3.classList.remove('left-to-box');
});

// Responsive pro, stu

let emailInput = document.getElementById('email');
let passInput = document.getElementById('pass');

if(screen.width <= 650) {
    emailInput.setAttribute('size', '20');
    passInput.setAttribute('size', '20')
}

// Select by clicking container

let proContainer = document.querySelector('.pro-container');
let stuContainer = document.querySelector('.stu-container');
let pro = document.getElementById('pro');
let stu = document.getElementById('stu');

proContainer.addEventListener('click', (e) => {

    proContainer.classList.add('checked-container');
    stuContainer.classList.remove('checked-container');
    pro.checked = true;
})

stuContainer.addEventListener('click', (e) => {
    
    stuContainer.classList.add('checked-container');
    proContainer.classList.remove('checked-container');
    stu.checked = true;
})