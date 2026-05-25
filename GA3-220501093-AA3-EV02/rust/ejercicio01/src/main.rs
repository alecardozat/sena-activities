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
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("error input circulo");

    let radio:u16 = match input.trim().parse(){
        Ok(num) => num,
        Err(_) => {
            println!("valor invalido");
            return;
        },
    };

    let area = PI * (radio as f64).powi(2);
    let perimeter = 2.0 * PI * (radio as f64).powi(2);

    println!("perimeter: {perimeter}\narea: {area}\n");

}

fn show_square(){
    println!("Escogiste CUADRADO\n");
    println!("Ingresa el lado: ");

    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("error input cuadrado");

    let lado:u16 = match input.trim().parse(){
        Ok(num)=>num,
        Err(_) => {
            println!("valor invalido");
            return;
        },
    };

    let area = 4 * lado;
    let perimeter = (lado as f64).powi(2);

    println!("perimeter: {perimeter}\narea: {area}\n");
}

fn show_rectangle(){
    println!("Escogiste RECTANGULO\n");
    println!("Ingresa el lado a: ");
    let mut input = String::new();

    io::stdin().read_line(&mut input).expect("error ladoA rectangulo");

    let lado_a:u16 = match input.trim().parse(){
        Ok(num) => num,
        Err(_) => {
            println!("no es un valor válido");
            return;
        }
    };

    println!("Ingresa el lado b: ");

    let mut input = String::new();

    io::stdin().read_line(&mut input).expect("error ladoB rectangulo");

    let lado_b:u16 = match input.trim().parse(){
        Ok(num) => num,
        Err(_) => {
            println!("no es un valor válido");
            return;
        }
    };

    let perimeter = 2 * (lado_b + lado_a);
    let area = lado_a * lado_b; 

    println!("perimeter: {perimeter}\narea: {area}\n");
}

fn show_triangle(){
    println!("Escogiste TRIANGULO\n");

    println!("Ingresa la base: ");
    let mut input_b = String::new();
    io::stdin().read_line(&mut input_b).expect("error base triangulo");
    let base:i16 = match input_b.trim().parse(){
        Ok(num) => num,
        Err(_) => {
            println!("no es un valor válido");
            return;
        }
    };

    println!("Ingresa la altura: ");
    let mut input_h = String::new();
    io::stdin().read_line(&mut input_h).expect("error altura triangulo");
    let altura:i16 = match input_h.trim().parse(){
        Ok(num) => num,
        Err(_) => {
            println!("no es un valor válido");
            return;
        }
    };

    println!("Ingresa lado a: ");
    let mut input_a = String::new();
    io::stdin().read_line(&mut input_a).expect("error lado a triangulo");
    let lado_a:i16 = match input_a.trim().parse(){
        Ok(num) => num,
        Err(_) => {
            println!("no es un valor válido");
            return;
        }
    };

    println!("Ingresa lado c: ");
    let mut input_c = String::new();
    io::stdin().read_line(&mut input_c).expect("error lado c triangulo");
    let lado_c:i16 = match input_c.trim().parse(){
        Ok(num) => num,
        Err(_) => {
            println!("no es un valor válido");
            return;
        }
    };

    let area = (base * altura)/2;
    let perimeter = lado_a + base + lado_c; 

    println!("perimeter: {perimeter}\narea: {area}\n");
}