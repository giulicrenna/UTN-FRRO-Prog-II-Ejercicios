from typing import List
def esPar(x):
    return x % 2 == 0

def numAlCuadrado(x):
    return x**2

def filtrar_transformar(lista):
    numerosPares = list(filter(esPar, lista))
    alCuadrado = list(map(numAlCuadrado, numerosPares))

    return alCuadrado

print(filtrar_transformar([1, 2, 3, 4, 5, 6, 7, 8]))