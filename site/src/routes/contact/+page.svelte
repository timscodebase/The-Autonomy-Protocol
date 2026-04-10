<script lang="ts">
    import HeroImage from '$images/img-1.jpg?enhanced&w=400;800;1600;2400';
    import { User, Mail, MessageSquare, HandHelping, LifeBuoy, Send } from '@lucide/svelte';

    const createInitialState = () => ({
        name: '',
        email: '',
        isOfferingHelp: false,
        comments: ''
    });

    let formData = $state(createInitialState());

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        
        console.log('Form Submitted:', $state.snapshot(formData));

        // 3. Reset the entire object at once
        // Because formData was declared with 'let', we can re-assign it.
        formData = createInitialState();
    };
</script>

<section class="hero">
    <enhanced:img
        src={HeroImage}
        sizes="(min-width: 800px) 800px, 100vw"
        alt="" 
        aria-hidden="true"
        class="hero-image"
    />
    <div>
        <h1>Contact Us</h1>
        <p>
            Have questions or want to learn more about the Autonomy Protocol? Reach out to us! We're here to help you take charge of your own life and start governing yourself.
        </p>
    </div>
</section>

<section class="content">
    <form onsubmit={handleSubmit} class="contact-form">
        <div class="input-group">
            <label for="name"><User size={18} /> Name</label>
            <input 
                type="text" 
                id="name" 
                bind:value={formData.name} 
                placeholder="Your name" 
                required 
            />
        </div>

        <div class="input-group">
            <label for="email"><Mail size={18} /> Email</label>
            <input 
                type="email" 
                id="email" 
                bind:value={formData.email} 
                placeholder="email@example.com" 
                required 
            />
        </div>

        <div class="segmented-control">
			<button 
				type="button" 
				class="control-option" 
				class:active={!formData.isOfferingHelp}
				onclick={() => formData.isOfferingHelp = false}
			>
				<LifeBuoy size={18} />
				<span>I need help</span>
			</button>

			<button 
				type="button" 
				class="control-option" 
				class:active={formData.isOfferingHelp}
				onclick={() => formData.isOfferingHelp = true}
			>
				<HandHelping size={18} />
				<span>I want to offer help</span>
			</button>
			
			<div class="glider" class:shifted={formData.isOfferingHelp}></div>
		</div>

        <div class="input-group">
            <label for="comments"><MessageSquare size={18} /> Comments</label>
            <textarea 
                id="comments" 
                bind:value={formData.comments} 
                rows="5" 
                placeholder="How can we assist you?"
            ></textarea>
        </div>

        <button type="submit" class="submit-btn">
            Submit Message <Send size={18} />
        </button>
    </form>
</section>

<style>
    .contact-form {
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: var(--gap-2);
        padding: var(--gap-1);
    }

    .input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: var(--accent);
    }

    input, textarea {
        background: var(--blue-60);
        border: 1px solid var(--blue-40);
        color: var(--white);
        padding: 0.8rem;
        border-radius: 4px;
        font-family: inherit;
        transition: border-color 0.2s;
    }

    input:focus, textarea:focus {
        outline: none;
        border-color: var(--accent-2);
    }

    .segmented-control {
		position: relative;
		display: flex;
		background-color: var(--blue-60);
		border: 1px solid var(--blue-40);
		padding: 4px;
		border-radius: 8px;
		width: 100%;
		overflow: hidden;
	}

	.control-option {
		position: relative;
		z-index: 2;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		padding: 0.8rem;
		border: none;
		background: none;
		color: var(--blue-20); /* Dimmed color for inactive */
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		cursor: pointer;
		transition: color 0.3s ease;
	}

	.control-option.active {
		color: var(--blue-80); /* Dark text for contrast against the yellow/pink slider */
	}

	/* The sliding highlight */
	.glider {
		position: absolute;
		top: 4px;
		left: 4px;
		height: calc(100% - 8px);
		width: calc(50% - 4px);
		background-color: var(--accent); /* Yellow from your global.css */
		border-radius: 4px;
		z-index: 1;
		transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.glider.shifted {
		transform: translateX(100%);
		background-color: var(--accent-2); /* Changes to Pink when "Offering Help" */
	}

	@media (max-width: 480px) {
		.segmented-control {
			flex-direction: column;
		}
		.glider {
			width: calc(100% - 8px);
			height: calc(50% - 4px);
		}
		.glider.shifted {
			transform: translateY(100%);
		}
	}

    .slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3px;
        background-color: var(--white);
        transition: .4s;
        border-radius: 50%;
    }

    input:checked + .slider { background-color: var(--accent-2); }
    input:checked + .slider:before { transform: translateX(26px); }

    .submit-btn {
        background: var(--accent);
        color: var(--blue-80);
        border: none;
        padding: 1rem;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        transition: transform 0.1s, filter 0.2s;
    }

    .submit-btn:hover {
        filter: brightness(1.1);
    }

    .submit-btn:active {
        transform: scale(0.98);
    }
</style>