from typing import List

def numero_mas_frecuente(lista):
    repetido = {}
    
    for numero in lista:
        if numero in repetido:
            repetido[numero] += 1
        else: 
            repetido[numero] = 1

    numero_frecuente = max(repetido, key=repetido.get)
    return numero_frecuente


print(numero_mas_frecuente([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]))