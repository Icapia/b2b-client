// import * as Sentry from "@sentry/browser";

interface IErrorArgs {
	error?: Error,
	opts?: any,
}

export function simplifyErrorMessage(errorMessage: string) {
	const errorMapping = new Map<RegExp, string>([
		// LoveNFT.sol errors messages
		[/cant more than 20 percent/i, 'Royalty fee cannot exceed 20%'],
		[/URIs length must be greater than 0/i, 'URIs length must be greater than 0'],
		[/invalid royalty fee/i, 'Invalid royalty fee'],
		[/new fee too high/i, 'New fee is too high'],
		// LoveNFTFactory errors messages
		[/(Execution reverted)/i, 'Execution reverted'],
		[/(out\s*of\s*gas)/i, 'Transaction ran out of gas'],
		[/(Invalid NFT collection)/i, 'Invalid NFT collection'],
		// LoveMarketplace errors messages
		[/(not listed)/i, 'NFT is not listed'],
		[/(not nft owner)/i, 'Not the NFT owner'],
		[/(no tokens for platform fee)/i, 'Insufficient tokens for platform fee'],
		[/(invalid start time)/i, 'Invalid start time'],
		[/(invalid end time)/i, 'Invalid end time'],
		[/(price less minimum commission)/i, 'Price is less than the minimum commission'],
		[/(not offered nft)/i, 'NFT is not offered for sale'],
		[/(not offerer)/i, 'Not the offerer'],
		[/(offer already accepted)/i, 'Offer already accepted'],
		[/(auction is not created)/i, 'Auction is not created'],
		[/(already sold)/i, 'NFT is already sold'],
		[/(not listed owner)/i, 'Not the listed NFT owner'],
		[/(auction not start)/i, 'Auction has not started'],
		[/(auction ended)/i, 'Auction has ended'],
		// LoveAirdrop errors message
		[/(insufficient balance)/i, 'Insufficient balance'],
		[/(name already exists)/i, 'Name already exists'],
		[/(LoveDrop does not exist)/i, 'LoveDrop does not exist'],
		[/(already claimed)/i, 'Already claimed'],
		[/(invalid proof)/i, 'Invalid proof'],
		[/(Invalid amount)/i, 'Invalid amount'],
		[/(Insufficient balance \(reserved\))/i, 'Insufficient balance (reserved)'],
		[/(Transfer failed)/i, 'Transfer failed'],
		// ERC errors message
		[/(ERC721: transfer to the zero address)/i, 'Transfer to the zero address'],
		[/(ERC721: token transfer failed)/i, 'Token transfer failed'],
		[/(ERC721: owner query for nonexistent token)/i, 'Owner query for nonexistent token'],
		[/(ERC721: approved query for nonexistent token)/i, 'Approved query for nonexistent token'],
		[/(ERC721: operator query for nonexistent token)/i, 'Operator query for nonexistent token'],
		[/(ERC721: approve to caller)/i, 'Approve to caller'],
		[/(ERC721: transfer caller is not owner nor approved)/i, 'Transfer caller is not owner nor approved'],
		[/(ERC721: transfer of token that is not own)/i, 'Transfer of token that is not owned'],
		[/(ERC721: transfer caller is not owner)/i, 'Transfer caller is not owner'],
		[/(ERC721: burn caller is not owner nor approved)/i, 'Burn caller is not owner nor approved'],
		[/(ERC721: operator query for nonexistent operator)/i, 'Operator query for nonexistent operator'],
		[/(ERC721: transfer of token that is not approved)/i, 'Transfer of token that is not approved'],
		// ERC20 errors message
		[/transfer amount exceeds balance/i, 'Transfer amount exceeds balance'],
		[/transfer amount exceeds allowance/i, 'Transfer amount exceeds allowance'],
		[/transfer from the zero address/i, 'Transfer from the zero address'],
		[/transfer to the zero address/i, 'Transfer to the zero address'],
		[/allowance query for nonexistent spender/i, 'Allowance query for nonexistent spender'],
		[/approval to the zero address/i, 'Approval to the zero address'],
		[/decrease allowance below zero/i, 'Decrease allowance below zero'],
		[/increase allowance failed/i, 'Increase allowance failed'],
		[/burn amount exceeds balance/i, 'Burn amount exceeds balance'],
		[/burn from the zero address/i, 'Burn from the zero address'],
		[/mint to the zero address/i, 'Mint to the zero address'],
		[/total supply exceeds maximum supply/i, 'Total supply exceeds maximum supply'],
		[/invalid amount/i, 'Invalid amount'],
		[/insufficient balance/i, 'Insufficient balance'],
		[/insufficient allowance/i, 'Insufficient allowance'],
		// Users errors message
		[/user rejected transaction\b/i, 'You rejected transaction'],
		[/value out-of-bounds/i, 'Value out of bounds. Incorrect value'],
		// [/cannot estimate gas/i, 'Cannot estimate gas'],
		[/less than min bid price/i, 'The bid price is lower than the minimum accepted bid price'],
		[/user rejected signing/i, 'User rejected signing'],
		[/missing provider/i, 'Missing provider'],
		[/params\/address must match pattern/i, 'Nothing found'],
	]);

	for (const [error, simplifiedError] of errorMapping) {
		if (error.test(errorMessage)) {
			return simplifiedError;
		}
	}

	const message = errorMessage.length > 60
		? `${errorMessage.slice(0, 60)}...`
		: `${errorMessage}`

	return message;
}

export function handleError({
	error,
	opts,
}: IErrorArgs) {
	console.error(error);

	// Sentry.withScope(scope => {
	// 	if (opts.user) {
	// 		scope.setUser(opts.user);
	// 	}

	// 	if (opts.tags) {
	// 		scope.setTags(opts.tags);
	// 	}

	// 	if (opts.extra) {
	// 		scope.setExtras(opts.extra);
	// 	}

	// 	Sentry.captureException(error);
	// });
}
