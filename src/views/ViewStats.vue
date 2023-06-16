<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{ storeNotes.totalNotesCount }}</td>
                </tr>
                <tr>
                    <td>Number of Characters (of all notes)</td>
                    <td>{{ storeNotes.totalCharacterCount }}</td>
                </tr>
            </tbody>
        </table>
        <input
            v-model="loveNoteballs"
            class="input"
            type="text"
            placeholder="Do you love noteballs?"
            v-autofocus
            maxlength="100"
        />
    </div>
</template>

<script setup>
/*
    imports
*/

    import { ref } from 'vue'
    import { useStoreNotes } from '@/stores/storeNotes'
    import { vAutofocus } from '@/directives/vAutofocus'
    import { useWatchCharacters } from '@/use/useWatchCharacters'

/*
    imports
*/

    const storeNotes = useStoreNotes()

/*
    love noteballs
*/

    const loveNoteballs = ref('')
    useWatchCharacters(loveNoteballs, 50)

</script>