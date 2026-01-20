#!/bin/bash
# Script pro aktualizaci HTML s responsive WebP images

echo "🖼️  Aktualizace obrázků na WebP + responsive..."

# Backup všech HTML souborů
echo "📦 Vytvářím zálohy..."
for file in *.html; do
  cp "$file" "$file.backup"
done

echo "✅ Zálohy vytvořeny (*.html.backup)"
echo ""
echo "⚠️  MANUÁLNÍ KROK POTŘEBNÝ:"
echo ""
echo "V každém HTML souboru nahraď staré <img> tagy tímto formátem:"
echo ""
cat << 'EOF'
<!-- STARÝ FORMÁT: -->
<img src="images/famil-gym.jpg" alt="Famil v posilovně">

<!-- NOVÝ FORMÁT (responsive + WebP): -->
<picture>
  <source
    srcset="images/famil-gym-small.webp 400w,
            images/famil-gym-medium.webp 800w,
            images/famil-gym-large.webp 1200w"
    sizes="(max-width: 768px) 100vw, 50vw"
    type="image/webp">
  <source
    srcset="images/famil-gym-small.jpg 400w,
            images/famil-gym-medium.jpg 800w,
            images/famil-gym-large.jpg 1200w"
    sizes="(max-width: 768px) 100vw, 50vw"
    type="image/jpeg">
  <img
    src="images/famil-gym.jpg"
    alt="Famil v posilovně"
    loading="lazy"
    width="1200"
    height="800">
</picture>
EOF

echo ""
echo "HLAVNÍ OBRÁZKY K NAHRAZENÍ:"
echo "- images/famil-gym.jpg (4.5 MB)"
echo "- images/famil-portrait.jpg (3.5 MB)"
echo "- images/famil-hero.jpg (440 KB)"
echo ""
echo "Pro odstranění záloh po kontrole:"
echo "  rm *.html.backup"
