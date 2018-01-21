#include<stdio.h>
#include<string.h>

void puris (char *x);

int main ()
{
char input[1000];
char *token;
printf("Enter a Phrase to Be translated to Puris: ");
fgets (input, sizeof (input), stdin);
printf ("\n");
token = strtok (input, " ");
puris(token);
getch();
return 0;
}


void puris (char *string)
{
char *word = string;
while (word != '\0')
{
      if (word[0] != 'a' && word[0] != 'e' && 
          word[0] != 'i' && word[0] != 'o' &&
          word[0] != 'u')
          {
                  printf("%s%c%s", word + 1, word[0], "ay ");
                  word = strtok(NULL, " ");
                  } // if
      else
      {
          printf("%c%s%s", word[0], word + 1, "ay ");
          word = strtok(NULL, " ");
          } // else
} // while

printf("\n\n");
} 
