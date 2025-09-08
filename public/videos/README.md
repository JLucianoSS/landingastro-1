# Videos del Hero

## Instrucciones para agregar el video de fondo

1. **Coloca tu video** en esta carpeta con el nombre `hero-background.mp4`
2. **Recomendaciones técnicas**:

   - Formato: MP4 (H.264)
   - Duración: 10-30 segundos (se reproduce en loop)
   - Resolución: 1920x1080 (Full HD) o superior
   - Tamaño: Máximo 10MB para mejor rendimiento
   - Contenido: Video abstracto, tecnología, o movimiento suave

3. **Alternativas**:

   - Si no tienes video, el sistema mostrará un gradiente de fondo
   - Puedes usar videos de stock gratuitos de:
     - Pexels Videos
     - Pixabay Videos
     - Unsplash Videos

4. **Optimización**:
   - Comprime el video para web
   - Usa herramientas como HandBrake o FFmpeg
   - Considera crear versiones para diferentes dispositivos

## Ejemplo de comando para optimizar video:

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a aac -b:a 128k -movflags +faststart hero-background.mp4
```
