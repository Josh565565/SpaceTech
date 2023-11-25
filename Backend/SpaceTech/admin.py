from django.contrib import admin
from .models import SpaceTech, Category

@admin.register(SpaceTech)
class SpaceTechAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'slug',)
    prepopulated_fields = {'slug': ('title',)}

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug',)
    prepopulated_fields = {'slug': ('title',)}
