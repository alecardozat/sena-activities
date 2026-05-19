# Resolución a problemas algorítmicos aplicando estructuras de almacenamiento.

En esta actividad deberá aplicar todos los conocimientos adquiridos a lo largo del componente formativo, para dar solución a problemas, utilizando todas las estructuras de control requeridas y el lenguaje JavaScript.

Utilizando el lenguaje JavaScript, desarrollar un programa que dé solución a los siguientes problemas:

1. Desarrollar un programa que permita calcular el área o perímetro de algunas figuras planas, según la siguiente tabla:

**Tabla 1**

Área y perímetro de figuras planas

![alt text](./assets/image.png)

2. Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas en un vector de enteros y luego determine la cantidad de personas que son menores de edad, mayores de edad, cuántos adultos mayores, la edad más baja, la edad más alta y el promedio de edades ingresadas. Para el ejercicio anterior, suponga que un adulto mayor debe tener una edad igual o superior a 60. Debe validar para cada ingreso, que los valores estén en un rango entre 1 y 120 años. En caso de error deberá notificar y solicitar un nuevo valor.

3. Escriba un programa que lea dos vectores de números enteros ordenados ascendentemente y luego produzca la lista ordenada de la mezcla de los dos, por ejemplo, si los dos arreglos tienen los números 1 3 6 9 17 y 2 4 10 17, respectivamente, la lista de números en la pantalla debe ser 1 2 3 4 6 9 10 17 17. Limite los vectores a un tamaño de 5 y debe validar en cada ingreso que realmente se estén ingresando los datos de forma ascendente.

4. Una emisora con presencia en diferentes ciudades, desea conocer el rating de canciones y cantantes más escuchados (sonados) en este semestre del año. Por lo tanto, se ha pedido a aprendices del SENA desarrollar una solución que permita conocer la respuesta de 6 personas con relación a sus gustos musicales. Con fines administrativos y realizar una rifa entre las personas encuestadas, la emisora desea poder registrar de las personas entrevistadas su nombre, número de identificación (cédula), fecha de nacimiento, correo electrónico, ciudad de residencia, ciudad de origen. Además, se deberá poder almacenar el artista y título de hasta 3 canciones favoritas en cada una de las personas que se ingrese. Teniendo en cuenta lo anterior, se sugiere que la solución deberá mostrar un menú que permita las siguientes opciones:

    **a.** Agregar una persona con los datos que se listan anteriormente.

    **b.** Mostrar la información personal de una persona particular por                    medio de su posición en el vector.


    ## Soluciones

    2. 
    ### Pseudocódigo:
    
  ```pseudocode
ALGORITMO calcularDiezEdades;
VAR
    Definir edades, i Como Entero
    Definir menores, mayores, adultosMayores Como Entero
    Definir minima, maxima, suma Como Entero
    Definir promedio Como Real
    Dimension edades[10]    

INICIO
    menores <- 0
    mayores <- 0
    adultosMayores <- 0
    suma <- 0
    
    Para i <- 1 Hasta 10 Con Paso 1 Hacer
        Escribir "Ingrese la edad de la persona ", i, ":"
        Leer edades[i]
        
        suma <- suma + edades[i]
        
        Si edadIngresada < 1 O edadIngresada > 120 Entonces
            Escribir "Error: La edad debe estar en el rango de 1 a 120 años."
        FinSi

        Si edades[i] < 18 Entonces
            menores <- menores + 1
        Sino
            mayores <- mayores + 1
        FinSi
        
        Si edades[i] >= 60 Entonces
            adultosMayores <- adultosMayores + 1
        FinSi
    FinPara
    
    minima <- edades[1]
    maxima <- edades[1]
    
    Para i <- 2 Hasta 10 Con Paso 1 Hacer
        Si edades[i] < minima Entonces
            minima <- edades[i]
        FinSi
        Si edades[i] > maxima Entonces
            maxima <- edades[i]
        FinSi
    FinPara
    
    promedio <- suma / 10

    Escribir "Menores de edad: ", menores
    Escribir "Mayores de edad: ", mayores
    Escribir "Adultos mayores: ", adultosMayores
    Escribir "Edad mínima: ", minima
    Escribir "Edad máxima: ", maxima
    Escribir "Promedio de edades: ", promedio
FinAlgoritmo
```
### Diagrama de flujo
![alt text](./assets/ejercicio02.png)