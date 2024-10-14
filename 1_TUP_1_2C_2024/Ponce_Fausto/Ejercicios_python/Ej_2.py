from typing import List, Dict, Any

def numero_mas_frecuente(lista):
    frecuencia = {}

    for numero in lista:
        

        for numero in lista:
            if numero in frecuencia:
                frecuencia[numero] += 1
            else:
                frecuencia[numero] = 1
    

    return max(frecuencia, key=frecuencia.get)


print(numero_mas_frecuente([1, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4]))