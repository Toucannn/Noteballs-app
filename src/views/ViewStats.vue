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
    </div>
</template>

<script setup>
/*
    imports
*/

    import { useStoreNotes } from '@/stores/storeNotes'

/*
    imports
*/

    const storeNotes = useStoreNotes()

</script>