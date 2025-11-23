from django.contrib import admin
from .models import Car, CarSpecification, CarPhoto

class CarSpecificationInline(admin.TabularInline):
    model = CarSpecification
    extra = 1

class CarPhotoInline(admin.TabularInline):
    model = CarPhoto
    extra = 1
    readonly_fields = ['uploaded_at']

@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ['name', 'year', 'price', 'price_currency', 'is_available']
    list_filter = ['year', 'is_available']
    search_fields = ['name']
    inlines = [CarSpecificationInline, CarPhotoInline]
    fieldsets = (
        ('Основная информация', {
            'fields': ('name', 'year', 'price', 'price_currency', 'is_available')
        }),
    )

@admin.register(CarPhoto)
class CarPhotoAdmin(admin.ModelAdmin):
    list_display = ['car', 'is_main', 'order', 'uploaded_at']
    list_filter = ['is_main', 'uploaded_at']
    search_fields = ['car__name']