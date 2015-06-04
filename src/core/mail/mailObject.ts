class MailObject{
	
	private from: string;
	private to: string;
	private subject: string;
	private text: string;
	private cc: string;
	
	public getFromAddress(): string{
		return this.from;
	}
	
	public setFromAddress(from: string): void{
		this.from = from;
	}
	
	public getToAddress(): string{
		return this.to;
	}
	
	public setToAddress(to: string): void{
		this.to = to;
	}
	
	public getCopyAddress(): string{
		return this.cc;
	}
	
	public setCopyAddress(copy: string): void{
		this.cc = copy;
	}
	
	public getSubject(): string{
		return this.subject;
	}
	
	public setSubject(subject: string): void{
		this.subject = subject;
	}
	
	public getMessage(): string{
		return this.text;
	}
	
	public setMessage(message: string): void{
		this.text = message;
	}
}
export = MailObject;