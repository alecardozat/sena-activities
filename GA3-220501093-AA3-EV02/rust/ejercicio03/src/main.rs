use std::io;

fn main() {
    let vector01 = fill_array("Vector 01");
    let vector02 = fill_array("Vector 02");
    let vector_total = merge_array(vector01, vector02);

    println!(
        "Vector01: {:?}, Vector02: {:?}, Vector total: {:?}",
        vector01, vector02, vector_total
    );
}

fn input_data() -> u16 {
    let mut input = String::new();

    io::stdin().read_line(&mut input).expect("error input");

    let input: u16 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Valor invalido");
            0
        }
    };
    input
}

fn fill_array(name: &str) -> [u16; 5] {
    let mut arr = [0;5];
    let mut count = 0;

    while count < 5 {
        println!("Ingresa datos en el {name}");
        let value = input_data();

        if count == 0 {
            arr[0] = value;
            count += 1;
            continue;
        }
        if arr[count - 1] >= value {
            println!("El valor tiene que ser mayor que el anterior");
            continue;
        }
        arr[count] = value;
        count += 1;
    }
    arr
}

fn merge_array(vector01: [u16; 5], vector02: [u16; 5]) -> [u16; 10] {
    let mut vector_total = [0; 10];
    let (mut i, mut j, mut k) = (0, 0, 0);

    while i < 5 && j < 5 {
        if vector01[i] <= vector02[j] {
            vector_total[k] = vector01[i];
            i += 1;
        } else {
            vector_total[k] = vector02[j];
            j += 1;
        }
        k += 1;
    }

    while i < 5 {
        vector_total[k] = vector01[i];
        i += 1;
        k += 1;
    }

    while j < 5 {
        vector_total[k] = vector02[j];
        j += 1;
        k += 1;
    }
    vector_total
}