from typing import List

def filtrar_y_transformat(lista: list[list]) -> list[int]:
    lista_aux: list[int] = []
    
    for numero in lista:
        if numero % 2 == 0 : lista_aux.append(numero**2)

    return lista_aux

def filtrar_y_transformar_2(*,lista : list[int]) -> Iterable[int]:
    for numero in lista:
        if numero % 2 == 0 : yield numero ** 2

