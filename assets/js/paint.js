


// Color	Price per Gallon
// Lime Green	$14.99
// Medium Brown	$11.14
// Royal Blue	$22.99
// Solid Black	$4.99
// Solid Cyan	$8.22
// Solid Purple	$11.99
// Solid Red	$13.42
// Solid White	$21.98
// Solid Yellow	$14.99

function configureListeners() {  
    var container  = document.querySelectorAll('img')
    for(let i = 0; i< container.length; i++) {
        document.getElementById(container[i].id).addEventListener('mouseover', (event)=>{
            {
                this.classList.add();
            }

    })

        document.getElementById(container[i].id).addEventListener('mouseout', (event)=> {
            {
                this.classList.remove();
            }

        })
    }



let pn1 = document.querySelector('#pn1');
pn1.addEventListener('mouseover', function(event) {
    alert('Lime green. Price: $14.99');
});

let pn2 = document.querySelector('#pn2')
pn2.addEventListener('mouseover', function(event) {
    alert('Medium Brown. Price:$11.14');
});

let pn3 = document.querySelector('#pn3')
pn3.addEventListener('mouseover', function(event) {
    alert('Royal Blue. Price:$22.99');
});

let pn4 = document.querySelector('#pn4')
pn4.addEventListener('mouseover', function(event) {
    alert('Solid Red. Price:$13.42');
});

let pn5 = document.querySelector('#pn5')
pn5.addEventListener('mouseover', function(event) {
    alert('Solid White. Price:$21.98');
});

let pn6 = document.querySelector('#pn6')
pn6.addEventListener('mouseover', function(event) {
    alert('Solid Black - $4.99');
});

let pn7 = document.querySelector('#pn7')
pn7.addEventListener('mouseover', function(event) {
    alert('Solid Cyan. Price:$8.22');
});

let pn8 = document.querySelector('#pn8')
pn8.addEventListener('mouseover', function(event) {
    alert('Solid Purple. Price:$11.99');
});

let pn9 = document.querySelector('#pn9')
pn9.addEventListener('mouseover', function(event) {
    alert('Solid Yellow. Price:$14.99');
});

}