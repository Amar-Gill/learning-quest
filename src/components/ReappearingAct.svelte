<section id='box'>
    swagginly baggins
</section>

<style>
    section {
        top: 7rem;
        position: fixed;
        color: lightgoldenrodyellow;
        width: 100%;
    }


    pre {
        margin-top: 0;
        margin-bottom: 0;
    }
</style>

<script>

    import { onMount } from 'svelte';

    function printAscii(dom) {
        dom.innerHTML = ""
        dom.innerHTML += `<pre style="margin-top:0; margin-bottom:0; font-weight:bold" >   _            _                              _                        </pre>`;
        dom.innerHTML += `<pre style="margin-top:0; margin-bottom:0; font-weight:bold" >  /_\\    _ __  | | __   __ _   _ __     __ _  ( )  ___                  </pre>`;
        dom.innerHTML += `<pre style="margin-top:0; margin-bottom:0; font-weight:bold" > //_\\&#8203;\\  | '__| | |/ /  / _\\&#8203;\` | | '_ \\   / _\\&#8203;\` | |/  / __|                 </pre>`;
        dom.innerHTML += `<pre style="margin-top:0; margin-bottom:0; font-weight:bold" >/  _  \\ | |    |   <  | (_| | | | | | | (_| |     \\__ \\                 </pre>`;
        dom.innerHTML += `<pre style="margin-top:0; margin-bottom:0; font-weight:bold" >\\_/ \\_/ |_|    |_|\\_\\  \\__,_| |_| |_|  \\__,_|     |___/                 </pre>`;
        dom.innerHTML += `<pre style="margin-top:0; margin-bottom:0; font-weight:bold" >                                                                        </pre>`;
        dom.innerHTML += `<pre style="margin-top:0; margin-bottom:0; font-weight:bold" >    ___                  _     _       __    __                       _ </pre>`;
        dom.innerHTML += `<pre style="margin-top:0; margin-bottom:0; font-weight:bold" >   /   \\   ___    __ _  | |_  | |__   / / /\\ \\ \\   __ _   _ __     __| |</pre>`;
        dom.innerHTML += `<pre style="margin-top:0; margin-bottom:0; font-weight:bold" >  / /\\ /  / _ \\  / _\\&#8203;\` | | __| | '_ \\ \\ \\/  \\/ /  / _\\&#8203;\` | | '_ \\   / _\\&#8203;\` |</pre>`;
        dom.innerHTML += `<pre style="margin-top:0; margin-bottom:0; font-weight:bold" > / /_//  |  __/ | (_| | | |_  | | | |  \\  /\\  /  | (_| | | | | | | (_| |</pre>`;
        dom.innerHTML += `<pre style="margin-top:0; margin-bottom:0; font-weight:bold" >/___,'    \\___|  \\__,_|  \\__| |_| |_|   \\/  \\/    \\__,_| |_| |_|  \\__,_|</pre>`;
        dom.innerHTML += `<pre style="margin-top:0; margin-bottom:0; font-weight:bold" >                                                                        </pre>`;
    }

    onMount(() => {
        const box = document.querySelector('section');

        printAscii(box);
    });

</script>