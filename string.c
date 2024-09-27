#include <stdio.h>

int main() {
    char str[100];
    int count = 0;

    printf("Digite uma string: ");
    scanf("%s", str); 

    for (int i = 0; str[i] != '\0'; i++) {
        if (str[i] == 'a' || str[i] == 'A') {
            count++;
        }
    }

    if (count > 0) {
        printf("A letra 'a' aparece %d vez(es) na string.\n", count);
    } else {
        printf("A letra 'a' não foi encontrada na string.\n");
    }

    return 0;
}


 int INDICE = 12, SOMA = 0, K = 1; 
 
 enquanto K < INDICE faça {

     K++; 
     SOMA += K; 
     } 
 imprimir(SOMA);

 k = 2
