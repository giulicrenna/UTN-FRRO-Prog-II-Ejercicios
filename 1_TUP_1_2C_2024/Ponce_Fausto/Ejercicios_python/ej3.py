from typing import List

def aplanar(*,lista:list[list[int]]) -> list[int]:
    lista_aux: list[int] = []

    for lista_nivel_2 in lista:
        if type(lista_nivel_2) is list:
            for elemento in lista_nivel_2:
                lista_aux.append(elemento)

            continue

        lista_aux.append(lista_nivel_2)

    return lista_aux
ejemplo: list[any]