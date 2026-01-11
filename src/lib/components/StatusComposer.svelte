<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  let statusText = '';
  let showEmojis = false;
  const dispatch = createEventDispatcher();

  function postStatus() {
    if (statusText.trim()) {
      console.log('Posting status:', statusText);
      statusText = '';
      dispatch('refresh');
    }
  }

  function addEmoji(emoji: string) {
    console.log('Emoji clicked:', emoji);
    statusText += emoji;
    showEmojis = false;
  }

  function toggleEmojiPanel() {
    console.log('Toggling emoji panel');
    showEmojis = !showEmojis;
  }
</script>

<div class="mb-4 bg-white">
  <div class="flex space-x-3">
    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
      我
    </div>
    
    <div class="flex-1">
      <textarea
        bind:value={statusText}
        placeholder="说点什么吧..."
        class="w-full min-h-[80px] p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="3"
      />
      
      <div class="flex items-center justify-between mt-3">
        <div class="flex space-x-2">
          <button
            type="button"
            class="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center space-x-1"
            on:click={toggleEmojiPanel}
          >
            <span>😊</span>
            <span>表情</span>
          </button>
          
          <button type="button" class="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center space-x-1">
            <span>📷</span>
            <span>图片</span>
          </button>
          
          <button type="button" class="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center space-x-1">
            <span>🎵</span>
            <span>音乐</span>
          </button>
          
          <button type="button" class="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center space-x-1">
            <span>📹</span>
            <span>视频</span>
          </button>
        </div>
        
        <button
          type="button"
          disabled={!statusText.trim()}
          on:click={postStatus}
          class="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          发布
        </button>
      </div>

      {#if showEmojis}
        <div class="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <div class="grid grid-cols-8 gap-1">
            {#each [
              '😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','😚','😙','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨'
            ] as emoji}
              <button
                type="button"
                class="text-xl p-2 hover:bg-gray-100 rounded"
                on:click={() => addEmoji(emoji)}
              >
                {emoji}
              </button>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  /* 确保按钮有合适的样式 */
  button {
    cursor: pointer;
  }
  
  button:disabled {
    cursor: not-allowed;
  }
</style>