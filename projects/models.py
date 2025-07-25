from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    preview_link = models.URLField()
    image = models.ImageField(upload_to='project_images/')

    def __str__(self):
        return self.title