from typing import List,Dict, Iterable

def numero_mas_frecuente(*,lista : list[int]) -> Iterable[int]:
    frecuencias: Dict[int,int] = {numero : 0 for numero in set(lista)}
    numero_mas_frecuente_lista: list[int] = []

    for numero in lista:
        frecuencias[numero] += 1

    mayor_frecuencia: int = sorted(list(frecuencias.values()))[-1]

    for key in frecuencias.keys():
        if frecuencias[key] == mayor_frecuencia:
            numero_mas_frecuente_lista.append(key)

    return numero_mas_frecuente_lista




















