use std::io;
use std::f64::consts::PI;

fn main() {
    loop{
        println!("elige una figura");
        println!("1.Circulo\n2.Cuadrado\n3.rectangulo\n4.triangulo\n5.salir");

        let mut input = String::new();
        io::stdin().read_line(&mut input).expect("error input");

        let option:u8 = match input.trim().parse(){
            Ok(num)=> num,
            Err(_) => {
                println!("Ingresa un número válido");
                continue;
            },
        };

        match option {
            1 => show_circle(),
            2 => show_square(),
            3 => show_rectangle(),
            4 => show_triangle(),
            5 => {
                println!("BYE BYE");
                break;
            },
            _ => println!("No es un valor válido\n")
        }
    }
}

fn show_circle(){
    println!("Escogiste CIRCULO\n");
    println!("Ingresa el radio: ");
    let radio:u16 = read_number();

    let area = PI * (radio as f64).powi(2);
    let perimeter = 2.0 * PI * (radio as f64).powi(2);

    println!("perimeter: {perimeter}\narea: {area}\n");
}

fn show_square(){
    println!("Escogiste CUADRADO\n");

    println!("Ingresa el lado: ");
    let lado = read_number();

    let area = (lado as f64).powi(2);
    let perimeter = 4 * lado;

    println!("perimeter: {perimeter}\narea: {area}\n");
}

fn show_rectangle(){
    println!("Escogiste RECTANGULO\n");

    println!("Ingresa el lado a: ");
    let lado_a = read_number();

    println!("Ingresa el lado b: ");
    let lado_b = read_number();

    let perimeter = 2 * (lado_b + lado_a);
    let area = lado_a * lado_b; 

    println!("perimeter: {perimeter}\narea: {area}\n");
}

fn show_triangle(){
    println!("Escogiste TRIANGULO\n");

    println!("Ingresa la base: ");
    let base = read_number();

    println!("Ingresa la altura: ");
    let altura = read_number();

    println!("Ingresa lado a: ");
    let lado_a = read_number();

    println!("Ingresa lado c: ");
    let lado_c = read_number();

    let area = (base * altura)/2;
    let perimeter = lado_a + base + lado_c; 

    println!("perimeter: {perimeter}\narea: {area}\n");
}

fn read_number()->u16{
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("error input");

    let input:u16 = match input.trim().parse(){
        Ok(num) => num,
        Err(_) => {
            println!("valor invalido");
            0
        }
    };
    input
}