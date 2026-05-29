use std::io;

fn main() {
    let mut personas = [0;10];

    for index in 0..personas.len(){
        println!("ingresa la edad de la persona No. {}",index+1 );
        personas[index] = input_age() as usize;
    }

    let mut menores = 0;
    let mut mayores = 0;
    let mut adultos_mayores = 0;
    let mut min = personas[0];
    let mut max = personas[0];
    let mut total_edad = 0;

    for edad in personas{
        total_edad += edad;
        if edad < min {
            min = edad;
        }
        if edad > max {
            max = edad;
        }
        if edad < 18 {
            menores+=1;
            continue;
        }
        if edad >= 60 {
            adultos_mayores+=1;
        }
        mayores+=1;
    }

    let promedio = total_edad as f64 / personas.len() as f64;

    println!("menores: {menores}");
    println!("mayores: {mayores}");
    println!("adultos mayores: {adultos_mayores}");
    println!("edad minima: {min}");
    println!("edad maxima: {max}");
    println!("promedio: {:.2}", promedio);
}

fn input_age() -> u8{
    loop{
        let mut input = String::new();
        io::stdin().read_line(&mut input).expect("error input edad");
        
        match input.trim().parse::<u8>() {
            Ok(num) if num >= 1 && num <= 120 =>{
                return num;
            },
            _ =>{
                println!("La edad de ser entre 1 y 120.\nIntenta de nuevo.");
            }
        }
    }
}
