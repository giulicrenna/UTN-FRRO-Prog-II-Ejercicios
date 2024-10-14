def aplanar_lista(listas):
    concat_listas = []

    for lista in listas: #Recorro los subarrays del array general
        for elemento in lista: #Recorro cada elemento de los subarrays
            concat_listas.append(elemento) #Agrego al array vacio cada elemento de cada subarray

    return concat_listas

print(aplanar_lista([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))