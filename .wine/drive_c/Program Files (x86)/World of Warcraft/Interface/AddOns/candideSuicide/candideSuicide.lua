--local currentItem --the current item or nil if no auction is running
--local bids = {} --bids on the current item
--local prefix = "[cs]" --prefix for chat messages


--default values for saved variables/options
--CS_Channel = "RAID" --the chat channel to use
--CS_AuctionTime = 30 -- the time (in seconds) for and auction
--CS_MinBid = 1 --the minimum amount of DKP you have to bid
--CS_ACL = {} -- the access control list


--local startAuction, endAuction, placeBid, cancelAuction, onEvent

function candideSuicide()
	print("Welcome to Candide Suicide, we must all tend our fields.");
end

SLASH_CS1, SLASH_CS2 = '/cs', '/candide';

function SlashCmdList.CS(msg, editbox)
	print("Yep, it works.");

	if msg == '' then
		MainFrame:Show();
	elseif msg == 'close' then
		MainFrame:Hide();
	end
end

	


local function showTooltip(self, linkData)
	local linkType = string.split(":",linkData)
	if linkType == "item"
		or linkType == "spell"
		or linkType == "enchant"
		or linkType == "quest"
		or linkType == "talent"
		or linkType == "glyph"
		or linkType == "unit"
		or linkType == "achievement" then 
			GameTooltip:SetOwner(self, "ANCHOR_CURSOR");
			GameTooltip:SetHyperlink(linkData);
			GameTooltip:Show();
	end

end




local function hideTooltip()
	GameTooltip:Hide()
end


local function setOrHookHandler(frame, script, func)
	if frame:GetScript(script) then
		frame:HookScript(script, func)
	else
		frame:SetScript(script, func)
	end
end




for i = 1, NUM_CHAT_WINDOWS do
	local frame = getglobal("ChatFrame"..i);
	if frame then
		setOrHookHandler(frame, "OnHyperLinkEnter", showTooltip)
		setOrHookHandler(frame, "OnHyperLinkLeave", hideTooltip)
	end
end


local suicideList = CreateFrame("Frame")

local function pstBidHandler(self, event, msg, sender)
	print(event, sender, msg)

end

suicideList:RegisterEvent("CHAT_MSG_WHISPER");
suicideList:SetScript("OnEvent", pstBidHandler);



local tasks = {};

function SimpleTimingLib_Schedule(time, func, ...)
	local t = {...};
	t.func = func;
	t.time = GetTime() + time;
	table.insert(tasks, t);

end

local function onUpdate()
	for i = #tasks, 1, -1 do
		local val = tasks[i]
		if val and val.time <= GetTime() then
			table.remove(tasks, i);
			val.func(unpack(val));
		end
	end
end

local frame = CreateFrame("Frame")
frame:SetScript("onUpdate", onUpdate)

function SimpleTimingLib_Unschedule(func, ...)
	for i = #tasks, 1, -1 do
		local val = tasks[1];
		if val.func == func then
			local matches = true
			for i = 1, select("#", ...) do
				if select(i, ...) ~= val[i] then
					matches = false
					break
				end
			end
			if matches then 
				table.remove(tasks, i)
			end
		end
	end
end





