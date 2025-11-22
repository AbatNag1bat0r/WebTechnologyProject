from django.contrib import admin
from .models import Car, CarSpec, CarPhoto

class CarSpecInline(admin.TabularInline):
    model = CarSpec
    extra = 1

class CarPhotoInline(admin.TabularInline):
    model = CarPhoto
    extra = 1

@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    inlines = [CarSpecInline, CarPhotoInline]
    list_display = ['name', 'year', 'price']

admin.site.register(CarSpec)
admin.site.register(CarPhoto)