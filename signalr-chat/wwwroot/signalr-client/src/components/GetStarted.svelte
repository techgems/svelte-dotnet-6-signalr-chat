<script lang="ts">
    import ColorPicker from "./ColorPicker.svelte";
    import Modal from "./Modal/Modal.svelte";
    import ModalBody from "./Modal/ModalBody.svelte";
    import ModalFooter from "./Modal/ModalFooter.svelte";

    export let isOpen: boolean;
    let selectedLabel = "";
    let selectedName = "";
</script>

<Modal {isOpen}>
    <ModalBody>
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
                class="text-lg leading-6 font-medium text-gray-900"
                id="modal-title"
            >
                Get Started
            </h3>
            <div class="mt-2">
                <p class="text-sm text-gray-500">
                    Please write your name and pick a color for your messages.
                </p>
                <div class="mt-6">
                    <label for="name" class="text-gray-700 block text-sm font-medium mb-3">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        bind:value={selectedName}
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="Write your name here..."
                    />
                    <span class="mt-4 mb-6 text-gray-700 block text-sm font-medium">
                        Choose your color:
                    </span>
                    <ColorPicker bind:value={selectedLabel} />
                </div>
            </div>
        </div>
    </ModalBody>
    <ModalFooter>
        <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >Begin Chat</button
        >
    </ModalFooter>
</Modal>
