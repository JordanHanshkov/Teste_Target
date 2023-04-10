# Solicita que o usuário informe a string a ser invertida
string_original = input("Informe a string a ser invertida: ")

# Inicializa uma string vazia para armazenar a string invertida
string_invertida = ""

# Percorre a string original de trás para frente
for i in range(len(string_original)-1, -1, -1):
    # Concatena cada caractere ao início da string invertida
    string_invertida += string_original[i]

# Imprime a string invertida
print("String original: ", string_original)
print("String invertida: ", string_invertida)
