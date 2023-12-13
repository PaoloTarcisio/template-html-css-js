const MyButton = document.getElementById('my-button');


MyButton.addEventListener('click', function() {
    const Body = document.querySelector('body');
    const Main = document.createElement('div');
    Main.className = "p-5 m-5";
    Body.append(Main);

    const Griglia = document.createElement('div');
    Griglia.id = 'griglia';


    Main.append(Griglia);

    for (let i = 1; i <= 100; i++) {

        const box = document.createElement('div');
        box.className = 'box';
        boxClass = box.className
        box.append(i);
        Griglia.append(box);
        //console.log(i)
        box.addEventListener('click', function() {
            console.log(i)
            box.className = 'box  my-background';

        });
    };
});

