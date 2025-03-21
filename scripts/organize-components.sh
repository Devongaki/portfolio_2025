#!/bin/bash

# Create necessary directories
mkdir -p src/components/{layout/{Header,Footer},ui,sections/{Hero,Projects,Contact},icons}

# Move components to their respective folders
mv src/components/Logo.tsx src/components/ui/Logo/Logo.tsx 2>/dev/null || true
mv src/components/Header.tsx src/components/layout/Header/Header.tsx 2>/dev/null || true
mv src/components/Footer.tsx src/components/layout/Footer/Footer.tsx 2>/dev/null || true
mv src/components/Hero.tsx src/components/sections/Hero/Hero.tsx 2>/dev/null || true
mv src/components/Projects.tsx src/components/sections/Projects/Projects.tsx 2>/dev/null || true
mv src/components/Contact.tsx src/components/sections/Contact/Contact.tsx 2>/dev/null || true

# Create index files for each component
echo "export { default } from './Header';" > src/components/layout/Header/index.ts
echo "export { default } from './Footer';" > src/components/layout/Footer/index.ts
echo "export { default } from './Hero';" > src/components/sections/Hero/index.ts
echo "export { default } from './Projects';" > src/components/sections/Projects/index.ts
echo "export { default } from './Contact';" > src/components/sections/Contact/index.ts

# Create CSS files for each component
touch src/components/layout/Header/Header.css
touch src/components/layout/Footer/Footer.css
touch src/components/sections/Hero/Hero.css
touch src/components/sections/Projects/Projects.css
touch src/components/sections/Contact/Contact.css

echo "Components organized successfully!" 