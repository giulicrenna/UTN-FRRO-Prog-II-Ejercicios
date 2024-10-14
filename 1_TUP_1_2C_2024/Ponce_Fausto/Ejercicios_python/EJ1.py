from typing import List, Dict, Tuple, Any

def esPar(num):
    return num % 2 == 0

def filtrar_transformar(array):
    numeroPar = list(filter(esPar, array))
    elevado = list(map(lambda x: x**2, numeroPar))
    return elevado

print(filtrar_transformar([1, 2, 3, 4]))