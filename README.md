# Portfolio Website

## Madhurya Putrevu

This is a test.

## Development 

### How to run Tailwind development server

```
npx tailwindcss -i ./src/css/index.css -o ./dist/output.css --watch
```

worked for body on laptop - draft 1
<body class="min-w-screen min-h-screen flex flex-col mx-auto container bg-zinc-50">
    <div class="flex-grow flex flex-col items-center">
        <header class="capitalize text-zinc-600 text-xl font-normal antialiased w-full flex flex-row justify-between px-4 py-4">
            <div class="flex-none flex flex-row space-x-3">
                <a href="./about/index.html"><span class="text-zinc-600 hover:text-zinc-900 transition-all">About</span></a>
                <a href="./work/index.html"><span class="text-zinc-600 hover:text-zinc-900 transition-all">Work</span></a>
                <a href="./play/index.html"><span class="text-zinc-600 hover:text-zinc-900 transition-all">Play</span></a>
                <a href="./contact/index.html"><span class="text-zinc-600 hover:text-zinc-900 transition-all">Contact</span></a>              
            </div>
            <div class="flex-none">
                <span>MADHURYA PUTREVU</span>
            </div>
        </header>
    </div>   
</body>