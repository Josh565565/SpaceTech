from django.db import models
from django.urls import reverse
from django.utils.text import slugify  # Add this import statement

class SpaceTech(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    # Add other fields as needed
    slug = models.SlugField(max_length=255, unique=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('spacetech:product_list_by_category',
                       args=[self.slug])









class Category(models.Model):

    title = models.CharField(max_length=200)

    image = models.URLField(max_length=200)

    slug = models.SlugField(max_length=200,
                            unique=True)

    class Meta:
        ordering = ['title']
        indexes = [
            models.Index(fields=["title"]),
        ]
        verbose_name = 'category'
        verbose_name_plural = 'categories'
