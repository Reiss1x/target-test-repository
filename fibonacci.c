#include <stdio.h>

int main() {
    while (1) {
        int primeiro = 0, segundo = 1, proximo, n;
    
        printf("Digite a quantidade de termos: ");
        scanf("%d", &n);

        printf("Fibonacci: ");

        for (int i = 1; i <= n; ++i) {
            printf("%d, ", primeiro);
            proximo = primeiro + segundo;
            primeiro = segundo;
            segundo = proximo;
        }

        printf("\n");

    }
    
    return 0;
}