use std::io;

#[derive(Debug, Default)]
struct Person {
    name: String,
    dni: String,
    birthdate: String,
    email: String,
    current_city: String,
    origin_city: String,
    artist: String,
    song01: String,
    song02: String,
    song03: String,
}

fn main() {
    let mut personas: [Person; 6] = Default::default();

    for index in 0..personas.len() {
        println!("Ingresa los datos de la persona No. {}", index + 1);
        personas[index] = fill_person();
    }

    loop {
        println!("1. Buscar una persona.\n2.Salir");

        let option = read_u8();

        match option {
            1 => {
                println!("Elegiste buscar");
                println!("Ingresa el indice de la persona");
                let index = read_u8();

                if index > 5 {
                    println!("El valor no esta dentro del rango de los datos");
                    continue;
                }

                println!("{:?}", personas[index as usize]);
            }
            2 => {
                println!("Bye bye");
                break;
            }
            _ => {
                println!("No es un dato valido");
                continue;
            }
        };
    }
}

fn fill_person() -> Person {
    println!("Nombre:");
    let name = input();

    println!("No. identificación:");
    let dni = input();

    println!("Fecha de nacimiento:");
    let birthdate = input();

    println!("Correo electrónico:");
    let email = input();

    println!("Ciudad de residencia:");
    let current_city = input();

    println!("Ciudad de origen:");
    let origin_city = input();

    println!("Artista favorito:");
    let artist = input();

    println!("Cancion favorita No. 1:");
    let song01 = input();

    println!("Cancion favorita No. 2:");
    let song02 = input();

    println!("Cancion favorita No. 3:");
    let song03 = input();

    Person {
        name,
        dni,
        birthdate,
        email,
        current_city,
        origin_city,
        artist,
        song01,
        song02,
        song03,
    }
}

fn input() -> String {
    let mut input = String::new();

    io::stdin()
        .read_line(&mut input)
        .expect("Ingresa un valor válido");

    input.trim().to_string()
}

fn read_u8() -> u8 {
    loop {
        let input = input();
        match input.trim().parse() {
            Ok(num) => return num,
            Err(_) => println!("Ingresa un número válido"),
        }
    }
}
