def fibonacci(num):
    """
    Função que calcula a sequência de Fibonacci até o valor informado e retorna a lista completa.
    """
    fib = [0, 1]  
    while fib[-1] < num:  
        fib.append(fib[-1] + fib[-2])  
    return fib

def verifica_fibonacci(num):
    """
    Função que verifica se um número informado pertence à sequência de Fibonacci.
    """
    fib = fibonacci(num)  
    if num in fib:
        return f'O número {num} pertence à sequência de Fibonacci.'
    else:
        return f'O número {num} não pertence à sequência de Fibonacci.'

num = 21
print(verifica_fibonacci(num))

